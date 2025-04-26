const Skills = () => (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Skills & Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Languages I Know 💻</h3>
          <ul className="list-disc list-inside">
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Learning Goals 📚</h3>
          <ul className="list-disc list-inside">
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>React Native</li>
          </ul>
        </div>
      </div>
    </section>
  )
  
  export default Skills
  