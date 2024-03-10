import Card from './Card'
import './App.css'

function App() {

  const priceObj={
    plan:"FREE",
    price:"0",
    list : [
    "Single User",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports"
  ]};
  const priceObj2={
    plan:"PLUS",
    price:"9",
    list : [
    "Single User",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports"
  ]};
  const priceObj3={
    plan:"PRO",
    price:"49",
    list : [
    "Single User",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports"
  ]};

  return (
    <div className='flexy'>
    <Card priceObj={priceObj} />
    <Card priceObj={priceObj2} />
    <Card priceObj={priceObj3}/>
    </div>
  )
}

export default App
