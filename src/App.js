import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formName: "AccountsHead",
      formDesc: "This is test description",
      data: [
        {
          fieldname: "AccountHeadName",
          fieldplaceholder: "Account Head Name",
          fieldlabel: "Account Head Name",
          fieldrules: [
            { required: true, message: "This field is required" }
          ],
          fieldtype: "text"
        },
        {
          fieldname: "AccountType",
          fieldplaceholder: "Account Type",
          fieldlabel: "Account Type",
          fieldrules: [],
          fieldtype: "select",
          options: ["Assets", "Liabilities"]
        }
      ]
    }
  }

  change=(e)=>{
    e.preventDefault()
    this.setState({
      [e.target.name]:e.target.value
    },()=>{
      console.log(this.state,"state")
    })
  }

  submit=(e)=>{
    e.preventDefault()
    let print=""
    this.state.data.map((values)=>{
      print=print+"    "+`${values.fieldname}=${this.state[values.fieldname]}`
    })
    alert(print)
  }

  render() {
    return (
      <div>
        <header>{this.state.formName}</header>
        <p>{this.state.formDesc}</p>
        <form onSubmit={this.submit}>
        {
          this.state.data.map((val, index) => {
            switch (val.fieldtype) {
              case "text":
                let require=false
                val.fieldrules.length===0?require=false:val.fieldrules.map((rule)=>{rule.required && rule.required===true ? require=true:require=false})
                return (
                  <>
                    <label>{val.fieldlabel}</label>
                    <input 
                    type={val.fieldtype} 
                    name={val.fieldname} 
                    placeholder={val.fieldplaceholder} 
                    onChange={this.change} 
                    required={require}
                    />
                  </>
                )
              
                case "textarea":
                  let require_text=false
                  val.fieldrules.length===0?require_text=false:val.fieldrules.map((rule)=>{rule.required && rule.required===true ? require_text=true:require_text=false})
                  return (
                    <>
                      <label>{val.fieldlabel}</label>
                      <input 
                      type={val.fieldtype} 
                      name={val.fieldname} 
                      placeholder={val.fieldplaceholder} 
                      onChange={this.change} 
                      required={require_text}
                      />
                    </>
                  )  

              case "select":
                let requires=false
                val.fieldrules.length===0?requires=false:val.fieldrules.map((rule)=>{rule.required && rule.required===true ? requires=true:requires=false})
                return (
                  <>
                  <label>{val.fieldlabel}</label>
                    <select name={val.fieldname} onChange={this.change} required={requires}>
                      <option value="">{val.fieldplaceholder}</option>
                      {val.options.map((optns,i)=>(
                        <option value={optns} key={i}>{optns}</option>
                      ))}
                    </select>
                  </>
                )

                case "checkbox":
                let requirec=false
                val.fieldrules.length===0?requirec=false:val.fieldrules.map((rule)=>{rule.required && rule.required===true ? requirec=true:requirec=false})
                return (
                  <>
                  <label>{val.fieldlabel}</label>
                      {val.options.map((optns,i)=>(
                        <>
                        <input type="checkbox" id={val.fieldname} onChange={this.change} name={val.fieldname} value="Bike" required={requirec}/>
                        <label for={val.fieldname}> {optns}</label><br/>
                        </>
                      ))}
                  </>
                )

              default:
                break;
            }
          })
        }
        <button type="submit">Submit</button>
        </form>
      </div>
    )



  }
}


export default App;
