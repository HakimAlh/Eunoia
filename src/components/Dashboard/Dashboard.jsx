import styles from '../Dashboard/Dashboard.module.css';

const Dashboard = ({ user }) => {
	return (
		<>
    <main className={styles.container}>
			<div class="card text-bg-dark">
				<img src="https://wallpapers.com/images/featured/novel-91fpu3nuvixu3y1n.jpg" class="card-img" alt="..." />
				<div class="card-img-overlay">
					<h5 class="card-title">Enigma X</h5>
					<p class="card-text">
						A talented Criminologist alongside the most infamous Ethical Hacker named as X
					</p>
					<p class="card-text">
					</p>
				</div>
			</div>
      </main>
		</>
	);
};

export default Dashboard;
