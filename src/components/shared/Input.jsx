/* eslint-disable react/prop-types */
const Input = ({ label, register, required, type = "text", errors }) => (
	<div className="mb-4">
		<label className="block text-gray-700 text-sm font-bold mb-2">
			{label}
		</label>
		<input
			{...register(label, { required })}
			type={type}
			className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
				errors[label] ? "border-red-500" : ""
			}`}
		/>
		{errors[label] && (
			<p className="text-red-500 text-xs italic">This field is required.</p>
		)}
	</div>
);

export default Input;
