import styles from "../ChapterForm/ChapterForm.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ChapterForm = (props) => {
	const [formData, setFormData] = useState({ 
		title: "",
		content: ""
	});

	const handleChange = (evt) => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		props.handleAddChapter(formData);
		setFormData({ 			
			title: "",
			content: ""
		
		});
	};

	return (
		<>
			<main className={styles.container}>
			<form onSubmit={handleSubmit}>
				{/* <h1>{chapterId ? "Edit Your Book" : "Add your new Book"}</h1> */}
				<label htmlFor="title-input">Title</label>
				<input
					required
					type="text"
					name="title"
					id="title-input"
					value={formData.title}
					onChange={handleChange}
				/>
				<label htmlFor="cover-input">Page Content:</label>
				<textarea
					required
					type="text"
					name="content"
					id="content-input"
					value={formData.content}
					onChange={handleChange}
				/>
				<button type="submit">SUBMIT</button>
			</form>
		</main>
		</>
	);
};

export default ChapterForm;

