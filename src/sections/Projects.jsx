import React from "react"

import { Card } from "@/components/ui/card"

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-4 mb-4 gap-4">
          <Card className="grid justify-center col-span-2">
            <img src="/images/project1.png" alt="Shoppee Clone project" />
          </Card>
          <div className="col-span-2 flex justify-center items-center">
            <div>
              <p className=" text-2xl font-bold underline">Shoppee Clone Project</p>
              <div className="mt-8">
                <p>A basic ecommerce website like shoppee which has products and product details</p>
              </div>
              <div className="mt-12">
                <p>
                  <a href="https://shoppee-clone-psi.vercel.app" target="_blank" rel="noopener noreferrer">View project</a>
                </p>
                <p>
                  <a href="https://github.com/ayedian/shoppee-clone" target="_blank" rel="noopener noreferrer">View codebase</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card className="flex justify-center col-span-2">
            <img src="/images/project2.png" alt="Book Manager project" />
          </Card>
          <div className="col-span-2 flex justify-center items-center">
            <div>
              <p className=" text-2xl font-bold underline">Book Manager Project</p>
              <div className="mt-8">
                <p>A book manager project where you can search book titles and show it's author, publishing date and the number of edition it has</p>
              </div>
              <div className="mt-12">
                <p>
                  <a href="https://book-manager-self.vercel.app" target="_blank" rel="noopener noreferrer">View project</a>
                </p>
                <p>
                  <a href="https://github.com/ayedian/book-manager" target="_blank" rel="noopener noreferrer">View codebase</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}