import styles from "../ChapterEditor/ChapterEditor.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as chapterService from '../../services/chapterService';
const ChapterEditor = (props) => {

	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	const { chapterId } = useParams();

	const handleChange = (evt) => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (chapterId) {
		  props.handleUpdateChapter(chapterId, formData);
		} else {
		  props.handleAddChapter(formData);
		}
	  };

	   useEffect(() => {
			  const fetchChapter = async () => {
				const chapterData = await bookService.show(chapterId);
				setFormData(chapterData);
			  };
			  if (chapterId) fetchChapter();
			}, [chapterId]);
	  
	  
	return (
		<>
			<main className={styles.container}>
			<form onSubmit={handleSubmit}>
				<div class="card text-center">
					<div class="card-header">
						<label for="exampleFormControlInput1" class="form-label">
							Title
						</label>
						<input
							type="text"
							class="form-control"
							id="exampleFormControlInput1"
							placeholder="Chapter Title"
							value={formData.title}
						/>
					</div>
					<div class="card-body">
						<div class="mb-3">
							<label for="exampleFormControlTextarea1" class="form-label">
								Content
						aa	</label>
							<textarea
								class="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								value={formData.content}
								placeholder="Write your content"
							></textarea>
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
