import styles from "../ChapterEditor/ChapterEditor.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ChapterEditor = (props) => {
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
					<div className="card text-center">
						<div className="card-header">
							<label htmlFor="exampleFormControlInput1" className="form-label">
							</label>
							<input
					required
					type="text"
					name="title"
					id="title-input"
					value={formData.title}
					onChange={handleChange}
				/>
						</div>
						<div className="card-body">
							<div className="mb-3">
							<label htmlFor="content-input">Content</label>
				<textarea
					required
					type="text"
					name="content"
					id="content-input"
					value={formData.content}
					onChange={handleChange}
				/>
							</div>
							<button type="submit">SUBMIT</button>
						</div>
						<div className="card-footer text-body-secondary"></div>
					</div>
				</form>
			</main>
		</>
	);
};

export default ChapterEditor;
