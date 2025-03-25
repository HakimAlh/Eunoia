import styles from '../Dashboard/Dashboard.module.css';

const Dashboard = ({ user }) => {
	return (
		<>
<section className={styles.about}>
          <header>
            <h3>Today's Spotlight</h3>
            <h1>How Do You Live?</h1>
			<h5>Novel - Non-Fiction</h5>
			<hr/>
          </header>
          <article>
            <p>
			After the death of his father, fifteen-year-old Copper must confront inevitable and enormous change, including the aftermath of his own betrayal of his best friend. Between episodes of Copper's emerging story, 
			letters from his uncle share knowledge and offer advice on life's big questions.
            </p>
          </article>
        </section>
	  </>
	);
};

export default Dashboard;
