import React, { useEffect } from "react";
import { ULabel } from "ulabel";

function ULabelComponent() {
  useEffect(() => {
    function on_submit(annotations) {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," +
          encodeURIComponent(JSON.stringify(annotations, null, 2)),
      );
      element.setAttribute("download", "annotations.json");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

    let subtasks = {
      car_detection: {
        display_name: "Car Detection",
        classes: [
          {
            name: "Car",
            color: "orange",
            id: 10,
          },
        ],
        allowed_modes: ["bbox", "polygon", "contour"],
        resume_from: null,
        task_meta: null,
        annotation_meta: null,
      },
    };
    console.log("Subtasks: ", subtasks);

    let ulabel = new ULabel({
      container_id: "ulabel-container",
      image_data: "https://ulabel.s3.us-east-2.amazonaws.com/cs-demo-0.png",
      username: "DemoUser",
      submit_buttons: on_submit,
      subtasks: subtasks,
    });
    ulabel.init(function () {
      console.log("ULabel is loaded.");
    });
  }, []);

  return <div id="ulabel-container" />;
}

function App() {
  return (
    <div className="App">
      <ULabelComponent />
    </div>
  );
}

export default App;
