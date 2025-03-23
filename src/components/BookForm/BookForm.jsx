import { useState } from "react";

const BookForm = (props) => {
	const [formData, setFormData] = useState({
		title: '',
        covers: '',
        description: '',
		category: 'General',
	});

	const handleChange = (evt) => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		props.handleAddBook(formData);
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title-input">Title</label>
				<input
					required
					type="text"
					name="title"
					id="title-input"
					value={formData.title}
					onChange={handleChange}
				/>
                <label htmlFor="cover-input">Cover</label>
				<input
					required
					type="text"
					name="cover"
					id="cover-input"
					value={formData.cover}
					onChange={handleChange}
				/>
				<label htmlFor="description-input">Description</label>
				<textarea
					required
					type="text"
					name="description"
					id="description-input"
					value={formData.description}
					onChange={handleChange}
				/>
				<label htmlFor="category-input">Category</label>
				<select
					required
					name="category"
					id="category-input"
					value={formData.category}
					onChange={handleChange}
				>
					<option value="Guide">Guide</option>
					<option value="Novel">Novel</option>
					<option value="Fiction">Fiction</option>
					<option value="Non-Fiction">Non-Fiction</option>
					<option value="General">General</option>
					<option value="History">History</option>
				</select>
				<button type="submit">SUBMIT</button>
			</form>
		</main>
	);
};

export default BookForm;
