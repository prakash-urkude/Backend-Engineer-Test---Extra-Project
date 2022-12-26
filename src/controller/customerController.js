const customerModel = require("../model/customerModel");
//const validation = require('../validator/validator.js')
const {isValid,isValidDate,isValidEmail,isValidNumber} = require('../validator/validator')

const createNewCustomer = async function(req,res){
    try{
    const data = req.body
    if(Object.keys(data) == 0)return res.status(400).send({status:false,msg:"please provide data"})
    const{firstName,lastName,mobileNumber,DOB,emailID,address,status}=data

    if(!firstName)return res.status(400).send({ status: false, message: "firstName is required" });
    if(!isValid(firstName)) return res.status(400).send({ status: false, message: "please provide valid firstName" });

    if(lastName)return res.status(400).send({ status: false, message: "lastName is required" });
    if(!isValid(lastName)) return res.status(400).send({ status: false, message: "please provide valid lastName" });

    if(!mobileNumber)return res.status(400).send({ status: false, message: "mobileNumber is required" });
    if(!isValidNumber(mobileNumber)) return res.status(400).send({ status: false, message: "please provide valid mobileNumber" });
    const findMobile = await customerModel.findOne({ mobileNumber: mobileNumber })
    if (findMobile) return res.status(400).send({ status: false, message: "mobilNumber is already present" })

    if(!DOB)return res.status(400).send({ status: false, message: "DOB is required" });
    if(!isValidDate(DOB)) return res.status(400).send({ status: false, message: "please provide valid DOB like:-MM-DD-YYYY" });

    if(!emailID)return res.status(400).send({ status: false, message: "emailID is required" });
    if(!isValidEmail(emailID)) return res.status(400).send({ status: false, message: "please provide valid emailID" });

    if(!address)return res.status(400).send({ status: false, message: "firstName is required" });
    if(!isValid(address)) return res.status(400).send({ status: false, message: "please provide valid address" });

    const customerID = uuid.v4()
    data.customerID = customerID

    if(!status)return res.status(400).send({ status: false, message: "status is required" });
    if(!['ACTIVE','INACTIVE'].includes(status)) return res.status(400).send({ status: false, message: "status can be ACTIVE/INACTIVE" });

     const saveData = await customerModel.create(data)
        return res.status(201).send({ status: true, data: saveData })

    } catch(err) {
        return res.status(500).send({ status: false, message: err.message })
    }}

    const getcustomers = async function (req, res) {
        try {
    
            const customerData = await customerModel.find({ status: "active" })
            if (customerData.length == 0) return res.status(404).send({ status: false, message: "No customer found" })
            return res.status(200).send({ status: true, data: customerData })
    
        } catch (err) {
            return res.status(500).send({ status: false, message: err.message })
        }
    }

    const deleteCustomer  = async function(req,res){
        try{
            const customerId = req.params.customerID
            const customer = await customerModel.findById(customerId)
            if (!customer) return res.status(400).send({ status: false, message: "no one found" })
            if(customer.isDeleted)return res.status(404).send({ status: false, message: "not found" })

            await customerModel.findOneAndUpdate({ customerID: customerID }, { $set: { isDeleted: true } })
            return res.status(200).send({ status: true, message: "customer deleated Susscefully" })


        
        }catch(err){
            return res.status(500).send({ status: false, message: err.message })
        }
    }

    module.exports = {createNewCustomer,getcustomers,deleteCustomer}