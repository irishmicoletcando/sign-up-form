import { SubmitHandler, useForm } from 'react-hook-form'

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const { register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<UserDetails>();

  const onSubmit: SubmitHandler<UserDetails> = data => {
    console.log(data)
  }

  return (
    <div className='bg-white rounded-xl text-dark-blue p-6 space-y-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div>
          <input 
            type='text' 
            id='firstName' 
            placeholder='First Name'
            className='border border-grayish-blue rounded-md py-3 px-7 w-full focus:outline-none focus:ring-1 focus:ring-dark-blue focus:border-dark-blue transition-colors'
            {... register('firstName', {required: 'First Name cannot be empty'})}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <input 
            type='text' 
            id='lastName' 
            placeholder='Last Name'
            className='border border-grayish-blue rounded-md py-3 px-7 w-full focus:outline-none focus:ring-1 focus:ring-dark-blue focus:border-dark-blue transition-colors'
            {... register('lastName', {required: 'Last Name cannot be empty'})}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <input 
            type='text' 
            id='email' 
            placeholder='Email Address'
            className='border border-grayish-blue rounded-md py-3 px-7 w-full focus:outline-none focus:ring-1 focus:ring-dark-blue focus:border-dark-blue transition-colors'
            {... register('email', {
              required: 'Email Address cannot be empty',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Looks like this is not an email',
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input 
            type='text' 
            id='password' 
            placeholder='Password'
            className='border border-grayish-blue rounded-md py-3 px-7 w-full focus:outline-none focus:ring-1 focus:ring-dark-blue focus:border-dark-blue transition-colors'
            {... register('password', {
              required: 'Password cannot be empty',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <button 
          type='submit' 
          disabled={isSubmitSuccessful}
          className='bg-green text-white uppercase font-semibold tracking-wider w-full p-4 rounded-lg drop-shadow-lg hover:cursor-pointer hover:bg-light-green'
        >
          {isSubmitSuccessful ? 'Claimed your free trial' : 'Claim your free trial'}
        </button>

        <p className='text-grayish-blue text-xs text-center'>By clicking the button, you are agreeing to our <span className='text-red font-bold'>Terms and Services</span>.</p>
      </form>
    </div>
  )
}

export default SignUpForm