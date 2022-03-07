import { FiLink} from 'react-icons/fi';
import './home.css';
import { useState } from 'react';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';

export default function Home () {
  const [link, setLink] =  useState('');
  const [data, setData] = useState ({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try  {
      const response = await api.post('/shorten', {
        long_url: link
      })
  
      setData(response.data);
      setShowModal(true);

      setLink('')

    }catch {
      alert("Ops parece que algo deu errado!");
      setLink('');
    }
  }

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
              value={link}
              onChange={ (e) => setLink(e.target.value)}
            />
          </div>

          <button onClick={handleShortLink}>
            Gerar link
          </button>
        </div>

        <Menu/>
        
        {showModal && (
          <LinkItem
          closeModal={ e => setShowModal(false)}
          content={data}
          />
        ) }
        
      </div>
    )
  }