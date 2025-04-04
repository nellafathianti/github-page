export default function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Node.js']
  
    return (
      <section className="p-8 bg-white shadow">
        <h2 className="text-2xl font-semibold mb-4">Keahlian</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <li key={skill} className="bg-blue-100 px-4 py-2 rounded-full text-blue-800">{skill}</li>
          ))}
        </ul>
      </section>
    )
  }
  