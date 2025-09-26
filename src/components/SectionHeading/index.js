import './index.css'

const SectionHeading = props => {
    const { title } = props
    return (
        <h1 className="heading-gradient">{title}</h1>
    )
}

export default SectionHeading;