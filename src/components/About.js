import React from 'react'

export default function About(props) {

    return (
      <div className="Container">
        <h1
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          className="my-3"
        >
          About Me
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#1d1a1a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                💗About the Creater of this revolutionary website
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <div
                className="accordion-body " style={{
                  backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>
                  This is a simple text opeations based website made for fun 💖
                </strong>{"  "}
                
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={{
                  backgroundColor: props.mode === "dark" ? "#1d1a1a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Working of this website
              </button>
            </h2>
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>Enter Your text and select options<br></br></strong>{" "}
                When you enter your text, you can convert it to Upper case, Lower case, 
                You can format your code if it is not, you can copy your text on clipboard or can clear the text that you have entered.
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="accordion-item"
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                style={{
                  backgroundColor: props.mode === "dark" ? "#1d1a1a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Connect with me 🫠
              </button>
            </h2>
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "#2d6fd0" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <a href="https://twitter.com/imHarry404?ref_src=twsrc%5Etfw" target={"blank"} ><h5>Twitter</h5></a> 
              <a href="https://www.linkedin.com/in/imharry404/" target={"blank"} ><h5>LinkedIn</h5></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
