import './App.css'
import RefForm from './components/Ref Form/RefForm'
import ReusableForm from './components/Reusable Form/ReusableForm'
import SimpleForm from './components/Simple Form/SimpleForm'
import StatefulForm from './components/Statful Form/StatefulForm'
function App() {
  const handleSignUpSubmit = data => {
    console.log('Sign Up data: ', data);
}
  const handleUpdateProfile = data => {
    console.log('Update data: ', data);
}
  return (
    <>
      <h1>React Core Concept 03</h1>
      <p>Simple Form</p>
      <SimpleForm></SimpleForm>
      <p>Stateful Form</p>
      <StatefulForm></StatefulForm>
      <p>Ref Form</p>
      <RefForm></RefForm>
      <p>Reusable Form</p>
      <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign UP</h2>
            <p>Please Sign Up right now</p>
          </div>
      </ReusableForm>

      <ReusableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile}
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm>
      
    </>
  )
}

export default App
