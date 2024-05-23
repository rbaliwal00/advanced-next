import styles from './index.module.css';

const Experience = ({ awards, references, experience, name, designation, about, portfolio, newsletter, backgroundColor }: any) => {
  return (
    <div className={styles.cvCreate}>
    <div className= {styles.experience}>
      <h1 className={styles.name} style={{ color: backgroundColor }}>{name}</h1>
      <h2>{designation}</h2>
      <hr style={{ backgroundColor: backgroundColor }} />
      <div className={styles.links}>
        <p><span>Portfolio Link</span> - {portfolio}</p>
        <p><span>Newsletter Link</span> - {newsletter}</p>
      </div>
      <div className={styles.about}>
        <h1 className={styles['about-me']}>ABOUT ME</h1>
        <p>{about}</p>
      </div>
      <div className={styles['awards-info']}>
        <h1 className={styles['about-me']}>AWARDS & RECOGNITIONS</h1>
        <div className={styles.awards}>
          {
            awards && awards.map((award: any) => (
              <div key={award.id} className={styles.award}>
                <p>{award.competition}</p>
                <p>{award.brandName}</p>
                <p>{award.department}, {award.position} </p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <h1 className={styles['about-me']}>REFERENCES</h1>
        <div className={styles.reference}>
          {
            references && references.map((reference: any) => (
              <div key={reference.id}>
                <div className={styles.ref}>
                  <h2>{reference.name}</h2>
                  <p>{reference.companyName},{reference.designation}</p>
                </div>
                <div className={styles['reference-info']}>
                  <p><span> Phone: </span>{reference.phone}</p>
                  <p> <span> Email: </span>{reference.email}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles['expedience-info']}>
        <h1>WORK EXPERIENCE</h1>
        <div className={styles['expedience-detail']}>

          {
            experience && experience.slice(0, 3).map((experience: any) => (
              <div key={experience.id} className={styles['exp-detail']}>
                <p>{experience.duration}</p>
                <p>{experience.companyName}, {experience.address}</p>
                <p className={styles['expedience-department']}>{experience.department}, {experience.position}</p>
              </div>
            ))
          }
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Experience;