const Home = () => {
  return (
    <div className="mt-20">
      <h1>Welcome on Blog Space</h1>
      <p>Découvrez l’essence de mon projet et suivez son évolution.</p>

    <div class="about">
      <h2>À propos du projet</h2>
      <p>
        Ce blog est un espace dédié au partage d’idées, de découvertes et de réflexions. 
        Vous y trouverez des articles variés, des tutoriels, ainsi que des mises à jour régulières 
        sur le projet en cours. L’objectif est de créer une communauté autour de la connaissance 
        et de l’entraide.
      </p>
    </div>

    <div class="login-form">
      <h2>Connexion</h2>
      <form>
        <input type="text" placeholder="Nom d'utilisateur" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
  </div>
    </div>
 
  )
}

export default Home