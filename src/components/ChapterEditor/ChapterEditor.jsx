import styles from "../ChapterEditor/ChapterEditor.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as bookService from '../../services/bookService';

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
					<div class="card text-center">
						<div class="card-header">
							<label for="exampleFormControlInput1" class="form-label">
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
						<div class="card-body">
							<div class="mb-3">
							<label htmlFor="description-input">Description</label>
				<textarea
					required
					type="text"
					name="description"
					id="description-input"
					value={formData.description}
					onChange={handleChange}
				/>
							</div>
							<button type="submit">SUBMIT</button>
						</div>
						<div class="card-footer text-body-secondary"></div>
					</div>
				</form>
			</main>
		</>
	);
};

export default ChapterEditor;
