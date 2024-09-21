import img1 from '../assets/logohealtplus.png'


const LeftNav = () => {
  return (
    <nav className='nav'>
        <img className='img1' src={img1} alt="" />
      <ul>
        <h4>Navigation</h4>
        <li>DASHBOARD</li>
        <li>APPOINTMENT</li>
        <li>PERSONAL HEALTH VITALS</li>
        <li>MEDICINE DOSAGE</li>
        <li>SELF-HELP TIPS</li>
        <li>LOGOUT</li>
      </ul>
    </nav>
  )
}

export default LeftNav