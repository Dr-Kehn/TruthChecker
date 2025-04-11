import {useState} from 'react'
import { faqs } from './faq'
import plus from  "../assets/plus.png"
import minus from '../assets/minus.png'



export const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  };

  return (
    <div className='faq-section'>
      


      {faqs.map((faq) => (
        <div key={faq.id}>
          <button onClick={() => toggleFAQ(faq.id)}
            aria-expanded={expandedId === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
            >
              <h3>{faq.question}</h3>
              {expandedId === faq.id ? (
                <img src={typeof minus === 'string' ? minus : minus.src} />
              ) : (
                <img src={typeof plus === 'string' ? plus : plus.src} />
              ) }


          </button>


          <div
              id={ `faq-answer-${faq.id}`}
              className={`faq-answer ${
                expandedId === faq.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
          >
            <p>{faq.answer}</p>

          </div>
          
        </div>
      ) 
      )}

    </div>
  )
 }
