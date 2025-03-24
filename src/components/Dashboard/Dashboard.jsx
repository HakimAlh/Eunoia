import styles from '../Dashboard/Dashboard.module.css';

const Dashboard = ({ user }) => {
	return (
		<>
    <main className={styles.container}>
			<div class="card text-bg-dark">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNnyrXArcjsnnSYpPH3FRey243fp_yflGaQ&s" class="card-img" alt="..." />
				<div class="card-img-overlay">
					<h5 class="card-title">Howl's Moving Castle</h5>
					<p class="card-text">
						
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
