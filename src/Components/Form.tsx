
const Form = () => {

    return (


        <form className='flex flex-col p-6 rounded-lg text-white' action='https://formspree.io/f/xzbllzjw' method='POST'>

            <div className='important lg:space-x-10 flex '>

                <div>
                    <label>your name</label><br />

                    <input id='text' type='text' name='user_name' required />

                </div>

                <div>
                    <label>phone number</label><br />

                    <input id='number' type='number' name='user_phonenumber' required />

                </div>
            </div>


            <div>
                <label> Email</label><br />

                <input id='email' type='email' name='user_email' required />

            </div>


            <div>
                <label>Subject</label><br />
                <input id='subject' type='text' name='subject' required />

            </div>

            <div>
                <label>Message</label><br />
                <textarea id='textarea' name='message' required />

            </div>
            <div className='pt-3'>
                <button type='submit' className='btn-box-shadow px-10 py-3 rounded-md w-full btn-hover text-xl'>Send Message</button>
            </div>

        </form>


    )
}

export default Form