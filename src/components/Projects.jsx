import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "motion/react"

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-2 text-center text-4xl'>Projects</motion.h1>
            <div className='mt-20'>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4'>
                            <img
                                src={project.image}
                                alt={project.title}
                                height={150}
                                width={150}
                                className='mb-6 rounded' />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className='flex gap-2'>
                                <a target='_blank' href={project.url}><p className='mb-4 text-purple-400 rounded bg-neutral-900  px-2 py-1 text-sm font-medium w-[70px]'>Live url</p></a>
                                <a target='_blank' href={project.sourceCode}><p className='mb-4 text-purple-400 rounded bg-neutral-900  px-2 py-1 text-sm font-medium w-[110px]'>Source code</p></a>
                                {project.adminPage && (
                                    <a target='_blank' href={project.adminPage}><p className='mb-4 text-purple-400 rounded bg-neutral-900  px-2 py-1 text-sm font-medium w-[110px]'>Admin Page</p></a>
                                )}
                            </div>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
