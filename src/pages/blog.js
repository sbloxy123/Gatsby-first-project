import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>this is our blog page</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto fuga minus ex hic, quibusdam molestiae, enim
                    cumque velit quis debitis, impedit excepturi repudiandae ab
                    iure. Fuga, asperiores! Ipsam, inventore iure.
                </p>
            </div>
        </Layout>
    )
}

export default blog
