import imgLogo from "../assets/quiz-logo.png";

export default function Header() {
	return (
		<header>
			<img src={imgLogo} alt="Quiz Logo" />
			<h1>ReactQuiz</h1>
		</header>
	);
}
