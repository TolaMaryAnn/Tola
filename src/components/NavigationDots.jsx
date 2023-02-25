import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
       {[ 'home','about', 'skills', 'testimonials', 'contact'].map((item, index) => (
                        
            <a
                href={`#${item}`}  
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#e4e4e4'}  : { } }
               
                    
                
                
            />
                            
                 ))}
    </div>
  )
}

export default NavigationDots
