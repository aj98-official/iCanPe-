import React, {useState} from "react";
import Modal1 from "./modal-1";
import Modal2 from "./modal-2";

export default function Modal() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
         { 
         (step === 1) ? <Modal1 setStep = {setStep}/> : <Modal2 />
          }

        </div>
      </div>
    </div>
  );
}
