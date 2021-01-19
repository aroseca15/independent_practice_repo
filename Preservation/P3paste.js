

// Original Code from Bootstrap:

{/* <div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div> */}








// Original Code for Starter:

{/* <div>
    <h2>
        Login Page
            </h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
            name='email'
            placeholder='Email'
            type='email'
            autoComplete='username'
            value={email}
            onChange={event => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
            name='password'
            placeholder='Password'
            type='password'
            autoComplete='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
        />
        <br />
        <button type='submit'>Login</button>
    </form>
    <p>
        Need an account? <button onClick={() => toggleRedirect(true)}>Signup Here</button>
    </p>

</div > */}



// Personal Attempts to combine:

{/* <div className="dropdown-menu">
            <form onSubmit={handleSubmit} className="px-4 py-3">
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                    <input className="form-control" id="exampleDropdownFormEmail1"
                        name='email'
                        placeholder="email@example.com"
                        type='email'
                        autoComplete='username'
                        value={email}
                        onChange={event => setEmail(event.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                    <input className="form-control" id="exampleDropdownFormPassword1"
                        name='password'
                        placeholder='Password'
                        type='password'
                        autoComplete='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/signup" onClick={() => toggleRedirect(true)}>New around here? Sign up</a>
        </div> */}
