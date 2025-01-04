import FreeTrial from "./components/FreeTrial";
import SignUpForm from "./components/SignUpForm";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="min-h-screen bg-desktop bg-red font-poppins text-white flex items-center">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <Title />
          
          <div className="lg:w-1/2">
            <FreeTrial />
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  )
}