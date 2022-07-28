const Section = ({title, description}) => {
  return (
    <div>
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>To find where your tune files are located, read the tutorial <a href="https://ldalvik.github.io/SwapBot/">here</a></p>
      </section>
    </div>
  )
}
export default Section
