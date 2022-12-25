isValidNumber = function(number){
    let mobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if((number === "" && number ===null && number === "undefined" )) return false
    if(mobile.test(value)) return true
}

const isValidEmail = function (email) {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(email)) return true
  }
  /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/

  const isValidUUID = function (UUID) {
    let uuidRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (uuidRegex.test(UUID)) return true
  }

  const isValid =function(value){
    if(typeof value === undefind|| typeof value === null || value ==="")return false; }
    if(typeof valse === "string" && value.trim().length ==0){
      return false
    }
    return true

    const isValidDate = function (date) {
      const dateregex = /^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
      return dateregex.test(String(date));
  
  }