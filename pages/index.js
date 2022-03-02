import styles from '../styles/Home.module.css'
import {useForm} from 'react-hook-form';
import { Alert } from 'react-bootstrap';

  const Home = () => {
    var xyz=false;
    const { register, handleSubmit,formState: {errors} } = useForm();
    const onSubmit = formData => {
      alert(JSON.stringify(formData))
      var xyz=true;
    }
    
  return (
    <div className={styles.Maincontainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.Form}>
    <div className={styles.sevendivs}>
<div className={styles.Formheading}>
  Let's Connect
</div>
<div className={styles.namedivs}>
  <div className={styles.firstnamegroup}>
      <input  {...register("firstname", {required: true,minLength: 5})}  id="firstname" className={styles.firstname} name="firstname" type="text" placeholder='First Name'/>
      { errors.firstname &&
      <Alert variant="danger">
        { errors.firstname?.type === "required" && <span className={styles.errormsg}>First Name is required</span> }
        { errors.firstname?.type === "minLength" && <span className={styles.errormsg}>Min length of First name is 5 characters!</span> }
      </Alert>
    }
  </div>
  <div className={styles.lastnamegroup}>
  <input {...register("lastname", {required: true,minLength: 5})} id="lastname" className={styles.lastname} name="lastname" type="text" placeholder='Last Name'/>
  { errors.lastname &&
        <Alert variant="danger">
          { errors.lastname?.type === "required" && <span className={styles.errormsg}>Last name is required</span> }
          { errors.lastname?.type === "minLength" && <span className={styles.errormsg}>Min length of Last name is 5 characters!</span> }
        </Alert>
      }
  </div>
</div>
<div className={styles.emailphone}>
  <div className={styles.emailgroup}>
  <input {...register("email", {required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} id="email" className={styles.email} name="email" type="email" placeholder='Email'/>
  { errors.email &&
        <Alert variant="danger">
          { errors.email?.type === "required" && <span className={styles.errormsg}>Email is required</span> }
          { errors.email?.type === "pattern" && <span className={styles.errormsg}>Enter a valid Email!</span> }
        </Alert>
      }
  </div>
  <div className={styles.phonegroup}>
  <input {...register("phone", {required: true,pattern: /(7|8|9|6)\d{9}/})} id="phone" className={styles.phone} name="phone" type="tel" placeholder='Mobile Number'/>
  { errors.phone &&
        <Alert variant="danger">
          { errors.phone?.type === "required" && <span className={styles.errormsg}>Mobile Number is required</span> }
          { errors.phone?.type === "pattern" && <span className={styles.errormsg}>Enter a valid Mobile number</span> }
        </Alert>
      }
  </div>
</div>
<div className={styles.addressgroup}>
  <div>
<textarea {...register("address", {required: true, maxLength: 30 })} id="address" rows="5" className={styles.address} name="address" type="text" placeholder='Address'/>
</div>
<div>
{ errors.address &&
      <Alert variant="danger">
        { errors.address?.type === "required" && <span className={styles.errormsg}>Address is required</span> }
        { errors.address?.type === "maxLength" && <span className={styles.errormsg}>Max length of Adress is 30 characters!</span> }
      </Alert>
  }
</div>
</div>

<div className={styles.daytimegroup}>
<div className={styles.daygroup}>
<select name="days" id="days" className={styles.daygroupselect}>
      <option value="Monday">Monday</option>
      <option value="mercedes">Tuesday</option>
      <option value="audi">Wednesday</option>
      <option value="audi">Thursday</option>
      <option value="audi">Friday</option>
      <option value="audi">Saturday</option>
      <option value="audi">Sunday</option>
  </select>
</div>
<div className={styles.timegroup}>
<select name="cars" id="cars" className={styles.timegroupselect} >
<option value="7Am">7Am</option>
      <option value="5pm">5pm</option>
      <option value="9pm">9pm</option>
  </select>
</div>
</div>
<div className={styles.coursegroup}>
  <div>
  <p>Have you done any AOL courses?</p>
  </div>
  <div>
  <label>
                    <input
                    {...register("course", {required: true})}
                        type="radio"
                        name="course"
                        value="Yes"
                        id="course"
                    />
                    Yes
                </label>
               
                <label>
                    <input
                         {...register("course", {required: true})}
                        type="radio"
                        name="course"
                        value="No"
                        id="course"
                    />
                    No
                    { errors.course &&
      <Alert variant="danger">
        { errors.course?.type === "required" && <span className={styles.errormsg}>Field  is required</span> }
      </Alert>
  }
                </label>
              
  </div>
</div>
<div className={styles.buttongroup}>
  <button className={styles.button} type="submit">Submit</button>
</div>
    </div>
    </div>
    </form>
    </div>
  )
}
export default Home;
