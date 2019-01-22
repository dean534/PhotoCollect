import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../../actions/target";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { fetchList } from "../../../actions/favorite";
import "./styles.css";

function Model({ targetPhoto, toggleModal, inputTag, fetchList, apiTag, uid }) {
  const handletoggle = e => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("fa-times") ||
      e.target.classList.contains("btn-close")
    ) {
      toggleModal();
    }
  };

  const addFavorite = (tag, targetPhoto, uid) =>
    new Promise((resolve, reject) => {
      var db = firebase.firestore();
      const dataDoc = db.collection("photoData").doc(uid);

      dataDoc
        .update({
          [tag]: firebase.firestore.FieldValue.arrayUnion(targetPhoto)
        })
        .catch(e => {
          dataDoc
            .set({
              [tag]: [targetPhoto]
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .then(() => {
          dataDoc.update({
            allTag: firebase.firestore.FieldValue.arrayUnion(tag)
          });
        })
        .then(() => resolve("success"));
    });
  const handleAdd = (inputTag, targetPhoto, uid) => e => {
    addFavorite(inputTag, targetPhoto, uid).then(() => fetchList(uid));
  };

  const btn =
    apiTag === "Pixabay" || apiTag === "Pexels" ? (
      <div className="input-group mb-3">
        <Field
          name="favorite"
          className="form-control"
          component="input"
          type="text"
          placeholder="tag"
        />
        <div className="input-group-append">
          <button
            className="btn"
            onClick={handleAdd(inputTag, targetPhoto, uid)}
          >
            <i className="material-icons">archive</i>
          </button>
        </div>
      </div>
    ) : null;

  return (
    <div
      className="modal fade show"
      id="exampleModalCenter"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      onClick={handletoggle}
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog modal-dialog-centered justify-content-center"
        role="document"
      >
        <div className="modal-content w-auto">
          <div className="modal-body">
            <div
              key={targetPhoto.largeImageURL || targetPhoto.src.large || null}
              class="model_photo overflow-hidden "
            >
              <img
                className="img-fluid rounded-top"
                src={targetPhoto.largeImageURL || targetPhoto.src.large || null}
                alt="img"
              />
              {btn}
              <button className="btn btn-close">
                <i class="fas fa-times fa-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const selector = formValueSelector("favorite");
  const inputTag = selector(state, "favorite");

  return {
    targetPhoto: state.target.photo,
    inputTag,
    apiTag: state.tag,
    uid: state.user.user.uid
  };
};

export default reduxForm({ form: "favorite" })(
  connect(
    mapStateToProps,
    { toggleModal, fetchList }
  )(Model)
);
