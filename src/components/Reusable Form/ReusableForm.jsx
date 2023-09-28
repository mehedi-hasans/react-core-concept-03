
export default function ReusableForm({formTitle,handleSubmit, submitBtnText = 'submit', children}) {
    const handleLocalSubit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }
    return (
    <div>
        {children}
        <form onSubmit={handleLocalSubit}>
            <input type="text" name="name" /><br/>
            <input type="email" name="email" /><br/>
            <input type="password" name="password" /><br/>
            <input type="submit" value={submitBtnText} /><br/>
        </form>
    </div>
  )
}
