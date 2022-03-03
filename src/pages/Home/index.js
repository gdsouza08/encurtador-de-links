import { FiLink} from 'react-icons/fi'
import './home.css'

export default function Home () {
    return (

      <div className="container-home">

        <div className='logo'>
          <img src="./logo.png" alt="logo principal"/>
          <h1>Gdsouza Short Links</h1>
          <span>Encurte seu link com a gente 👇</span>
        </div>

        <div className='area-input'>
          <div>
            <FiLink size={24} color="#fff"/>
            <input
              placeholder="Cole seu link aqui..."
            />
          </div>

          <button>
            Gerar link
          </button>
        </div>

      </div>
    )
  }