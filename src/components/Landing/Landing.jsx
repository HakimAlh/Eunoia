import ScrollableComponent from '../Scrollable/Scrollable';
import styles from '../Landing/Landing.module.css';
const Landing = ({ user }) => {
  
	return (
		<>
<section className={styles.about}>
                        <header>
                          <h1>Today's Feature:</h1>
                        
                         <h1>Enigma X!</h1>
                  
                    <h6>Novel - Non-Fiction</h6>
                    <hr/>
                          <p>
                    The famous Hudson Fran a genius Criminologist after a fatal accident that <br/>
                    gave him acquired savant syndrome. And his partner the infamous 'X' <br/>
                    An Ethical Hacker that cracked an unsolved case that was going on <br/>
                    for decades!
                          </p>
                        </header>
                        <article>
                        </article>
                      </section>
              
	  </>
    
	);
};

export default Landing;
