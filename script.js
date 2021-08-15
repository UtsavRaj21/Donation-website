let bt = document.querySelector(".donate-btn")
let payMent = document.querySelector(".payment-modal")
let showModal = false

bt.addEventListener("click", showPaymentModal)

function showPaymentModal(e){
  if(!showModal){
    let payemntForm = document.createElement("div")
    payemntForm.classList.add("payment-form")
    payemntForm.innerHTML = `<div class="col-md-4 mb-3" >
      <label for="validationCustom01" style="margin-top: 2rem;">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="form-check" style="margin-left: 26em;">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <div class="submit-button">
          <a href="https://rzp.io/l/CH9xmXt3O" class="btn btn-primary submit-btn" style="margin-left: 26em;" type="submit">Submit form</a>
    </div>`
    payMent.appendChild(payemntForm)
    showModal = true
  }
    
}