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
    <div className='bg-white rounded-xl text-dark-blue p-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <div className="relative">
            <input 
              type='text' 
              id='firstName' 
              placeholder='First Name'
              className={`font-semibold border rounded-md py-3 px-7 w-full focus:outline-none transition-colors
                ${errors.firstName 
                  ? 'border-red focus:border-red focus:ring-red' 
                  : 'border-grayish-blue focus:ring-1 focus:ring-dark-blue focus:border-dark-blue'
                }
                ${errors.firstName ? 'pr-12' : 'pr-7'}`}
              {... register('firstName', {required: 'First Name cannot be empty'})}
            />
            {errors.firstName && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="12" cy="12" r="12"/>
                    <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/>
                    <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/>
                  </g>
                </svg>
              </div>
            )}
          </div>
          {errors.firstName && <p className='text-sm text-red text-right italic mt-1'>{errors.firstName.message}</p>}
        </div>

        <div>
          <div className="relative">
            <input 
              type='text' 
              id='lastName' 
              placeholder='Last Name'
              className={`font-semibold border rounded-md py-3 px-7 w-full focus:outline-none transition-colors
                ${errors.lastName 
                  ? 'border-red focus:border-red focus:ring-red' 
                  : 'border-grayish-blue focus:ring-1 focus:ring-dark-blue focus:border-dark-blue'
                }
                ${errors.lastName ? 'pr-12' : 'pr-7'}`}
              {... register('lastName', {required: 'Last Name cannot be empty'})}
            />
            {errors.lastName && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="12" cy="12" r="12"/>
                    <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/>
                    <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/>
                  </g>
                </svg>
              </div>
            )}
          </div>
          {errors.lastName && <p className='text-sm text-red text-right italic mt-1'>{errors.lastName.message}</p>}
        </div>

        <div>
          <div className="relative">
            <input 
              type='text' 
              id='email' 
              placeholder='Email Address'
              className={`font-semibold border rounded-md py-3 px-7 w-full focus:outline-none transition-colors
                ${errors.email 
                  ? 'border-red focus:border-red focus:ring-red' 
                  : 'border-grayish-blue focus:ring-1 focus:ring-dark-blue focus:border-dark-blue'
                }
                ${errors.email ? 'pr-12' : 'pr-7'}`}
                {... register('email', {
                  required: 'Email Address cannot be empty',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Looks like this is not an email',
                  }
                })}
            />
            {errors.email && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="12" cy="12" r="12"/>
                    <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/>
                    <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/>
                  </g>
                </svg>
              </div>
            )}
          </div>
          {errors.email && <p className='text-sm text-red text-right italic mt-1'>{errors.email.message}</p>}
        </div>

        <div>
          <div className="relative">
            <input 
              type='text' 
              id='password' 
              placeholder='Password'
              className={`font-semibold border rounded-md py-3 px-7 w-full focus:outline-none transition-colors
                ${errors.password 
                  ? 'border-red focus:border-red focus:ring-red' 
                  : 'border-grayish-blue focus:ring-1 focus:ring-dark-blue focus:border-dark-blue'
                }
                ${errors.password ? 'pr-12' : 'pr-7'}`}
                {... register('password', {
                  required: 'Password cannot be empty',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
            />
            {errors.password && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="12" cy="12" r="12"/>
                    <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/>
                    <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/>
                  </g>
                </svg>
              </div>
            )}
          </div>
          {errors.password && <p className='text-sm text-red text-right italic mt-1'>{errors.password.message}</p>}
        </div>

        <div className='space-y-3'>
          <button 
            type='submit' 
            disabled={isSubmitSuccessful}
            className='bg-green text-white uppercase font-semibold tracking-wider w-full p-4 rounded-lg drop-shadow-lg hover:cursor-pointer hover:bg-light-green'
          >
            {isSubmitSuccessful ? 'Claimed your free trial' : 'Claim your free trial'}
          </button>

          <p className='text-grayish-blue text-xs text-center'>By clicking the button, you are agreeing to our <span className='text-red font-bold'>Terms and Services</span>.</p>
        </div>

      </form>
    </div>
  )
}

export default SignUpForm