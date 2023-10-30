import React from "react";

interface Props {
  modal: boolean;
  setModal: any;
  element: any;
  title?: any;
  width?: any;
  height?: any;
  hideX?: any;
}

export const Modal = ({
  modal,
  setModal,
  element,
  title,
  width,
  height,
  hideX,
}: Props) => {
  return (
    <div
      className={modal ? "modal" : "modal_none"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          height: height ? height : "fit-content",
          maxHeight: "690px",
          backgroundColor: "white",
          margin: "0px auto",
          borderRadius: "12px",
          maxWidth: width ? width : "fit-content",
          padding: "24px",
          transition: "0.3s",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div></div>
          <div className="modal_title">{title}</div>
          {hideX ? null : (
            <div onClick={() => setModal(false)} style={{ cursor: "pointer" }}>
              {/* <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.125 3.25H3.875C2.83984 3.25 2 4.08984 2 5.125V18.875C2 19.9102 2.83984 20.75 3.875 20.75H20.125C21.1602 20.75 22 19.9102 22 18.875V5.125C22 4.08984 21.1602 3.25 20.125 3.25ZM20.125 18.6406C20.125 18.7695 20.0195 18.875 19.8906 18.875H4.10938C3.98047 18.875 3.875 18.7695 3.875 18.6406V5.35938C3.875 5.23047 3.98047 5.125 4.10938 5.125H19.8906C20.0195 5.125 20.125 5.23047 20.125 5.35938V18.6406ZM15.9258 9.60156L13.5273 12L15.9258 14.3984C16.1055 14.5781 16.1055 14.8711 15.9258 15.0547L15.0547 15.9258C14.875 16.1055 14.582 16.1055 14.3984 15.9258L12 13.5273L9.60156 15.9258C9.42188 16.1055 9.12891 16.1055 8.94531 15.9258L8.07422 15.0547C7.89453 14.875 7.89453 14.582 8.07422 14.3984L10.4727 12L8.07422 9.60156C7.89453 9.42188 7.89453 9.12891 8.07422 8.94531L8.94531 8.07422C9.125 7.89453 9.41797 7.89453 9.60156 8.07422L12 10.4727L14.3984 8.07422C14.5781 7.89453 14.8711 7.89453 15.0547 8.07422L15.9258 8.94531C16.1094 9.125 16.1094 9.41797 15.9258 9.60156Z"
                  fill="black"
                />
              </svg> */}
            </div>
          )}
        </div>
        {element}
      </div>
    </div>
  );
};
