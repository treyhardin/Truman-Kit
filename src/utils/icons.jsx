export default function Icon(props) {

  switch (props.icon) {
    case "x":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
          <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M25 1 1.34 24.66 25 1Zm-.34 23.66L1 1l23.66 23.66Z"/>
        </svg>
      )

    case "check":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24">
          <path stroke="currentColor" d="m1 12.746 7.627 7.627L25 4"/>
        </svg>
      )

    case "globe":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" d="M23 11.903c0 6.075-4.925 11-11 11m11-11c0-6.075-4.925-11-11-11m11 11c0-3.037-4.925-5.5-11-5.5s-11 2.463-11 5.5m22 0c0 3.038-4.925 5.5-11 5.5s-11-2.462-11-5.5m22 0H1m11 11c-6.075 0-11-4.925-11-11m11 11c3.038 0 5.5-4.925 5.5-11s-2.462-11-5.5-11m0 22c-3.038 0-5.5-4.925-5.5-11s2.462-11 5.5-11m0 22v-22m-11 11c0-6.075 4.925-11 11-11"/>
        </svg>
      )

    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" d="M12.01 0C5.369 0 0 5.408 0 12.1a12.09 12.09 0 0 0 8.212 11.477c.597.12.815-.26.815-.58 0-.281-.02-1.242-.02-2.244-3.34.721-4.036-1.443-4.036-1.443-.537-1.402-1.332-1.762-1.332-1.762-1.094-.741.08-.741.08-.741 1.212.08 1.849 1.242 1.849 1.242 1.073 1.842 2.803 1.322 3.5 1.001.098-.781.417-1.322.755-1.622-2.665-.28-5.468-1.323-5.468-5.97a4.74 4.74 0 0 1 1.232-3.245c-.119-.3-.537-1.543.12-3.205 0 0 1.014-.32 3.3 1.242a11.501 11.501 0 0 1 6.005 0c2.287-1.563 3.301-1.242 3.301-1.242.657 1.662.239 2.905.12 3.205.775.841 1.232 1.923 1.232 3.245 0 4.647-2.803 5.669-5.488 5.97.438.38.815 1.101.815 2.243 0 1.623-.02 2.925-.02 3.325 0 .32.22.702.816.581A12.09 12.09 0 0 0 24 12.1C24.02 5.41 18.63 0 12.01 0Z" clip-rule="evenodd"/>
      </svg>
      )

    case "sun":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="currentColor"/>
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 1.561v2.61m0 15.658v2.61m7.381-17.82-1.845 1.845M6.464 17.536l-1.846 1.845m0-14.763 1.846 1.846m11.072 11.072 1.845 1.845M22.44 12h-2.61M4.171 12H1.56"/>
        </svg>

      )

    case "moon":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24">
          <g clip-path="url(#a)">
            <path fill="currentColor" d="M22.62 18.449a12.367 12.367 0 0 1-5.375 1.22c-6.858 0-12.416-5.558-12.416-12.416 0-1.925.438-3.748 1.22-5.375A11.99 11.99 0 0 0 .498 12c0 6.627 5.373 12 12 12 4.254 0 7.99-2.213 10.122-5.551Z"/>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="currentColor" d="M.498 0h24v24h-24z"/>
            </clipPath>
          </defs>
        </svg>
      )





      

  
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
          <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M25 1 1.34 24.66 25 1Zm-.34 23.66L1 1l23.66 23.66Z"/>
        </svg>
      )
  }

}