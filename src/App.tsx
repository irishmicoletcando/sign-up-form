import FreeTrial from "./components/FreeTrial";
import SignUpForm from "./components/SignUpForm";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="bg-desktop bg-red h-screen font-poppins text-white p-20">
      <Title />
      <FreeTrial />
      <SignUpForm />
    </div>
  )
}