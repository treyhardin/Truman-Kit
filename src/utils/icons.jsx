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

    case "solid-js":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800">
          <path fill="#BBBDBF" d="M583.425 303.026s-121.591-92.004-215.957-70.505c-2.769.693-5.768 1.387-8.306 2.311-14.536 4.624-25.38 12.714-32.07 22.423-1.385 1.85-2.308 3.93-3.461 5.779l-34.839 59.41 60.218 11.789c23.765 17.107 57.219 24.273 85.829 16.876l107.286 21.036 41.3-69.119Z"/>
          <path fill="url(#a)" d="M583.425 303.026s-121.591-92.004-215.957-70.505c-2.769.693-5.768 1.387-8.306 2.311-14.536 4.624-25.38 12.714-32.07 22.423-1.385 1.85-2.308 3.93-3.461 5.779l-34.839 59.41 60.218 11.789c23.765 17.107 57.219 24.273 85.829 16.876l107.286 21.036 41.3-69.119Z" opacity=".29"/>
          <path fill="#929497" d="M326.169 301.87c-2.769.694-5.769 1.387-8.306 2.312-38.531 12.483-51.682 48.545-29.533 80.214 22.149 31.67 71.293 47.389 109.824 34.906l143.971-46.695c0-.231-121.591-92.235-215.956-70.737Z"/>
          <path fill="url(#b)" d="M326.169 301.87c-2.769.694-5.769 1.387-8.306 2.312-38.531 12.483-51.682 48.545-29.533 80.214 22.149 31.67 71.293 47.389 109.824 34.906l143.971-46.695c0-.231-121.591-92.235-215.956-70.737Z" opacity=".34"/>
          <path fill="url(#c)" d="M515.592 405.895c-22.149-31.67-71.293-47.389-109.824-34.906l-143.971 46.695-45.222 80.908 257.487 44.153 46.145-82.295c9.228-16.182 8.306-36.062-4.615-54.555Z"/>
          <path fill="url(#d)" d="M470.37 486.572c-22.149-31.67-71.293-47.389-109.824-34.906l-143.971 46.926s121.591 92.004 215.957 70.506c2.769-.694 5.768-1.387 8.306-2.312 38.531-12.483 51.682-48.545 29.532-80.214Z"/>
          <defs>
            <linearGradient id="a" x1="270.86" x2="558.352" y1="228.478" y2="367.761" gradientUnits="userSpaceOnUse">
              <stop offset=".118" stop-color="#BBBDBF"/>
              <stop offset=".299" stop-color="#F1F1F2"/>
              <stop offset="1" stop-color="#D0D2D3"/>
            </linearGradient>
            <linearGradient id="b" x1="428.395" x2="377.925" y1="296.757" y2="464.668" gradientUnits="userSpaceOnUse">
              <stop stop-color="#BBBDBF"/>
              <stop offset=".475" stop-color="#929497"/>
              <stop offset="1" stop-color="#58595B"/>
            </linearGradient>
            <linearGradient id="c" x1="249.873" x2="540.555" y1="369.898" y2="567.121" gradientUnits="userSpaceOnUse">
              <stop stop-color="#58595B"/>
              <stop offset=".539" stop-color="#929497"/>
              <stop offset="1" stop-color="#58595B"/>
            </linearGradient>
            <linearGradient id="d" x1="380.995" x2="263.226" y1="393.664" y2="824.153" gradientUnits="userSpaceOnUse">
              <stop stop-color="#808184"/>
              <stop offset=".475" stop-color="#404041"/>
              <stop offset="1" stop-color="#231F20"/>
            </linearGradient>
          </defs>
        </svg>
      )

    case "vite":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800">
          <path fill="currentColor" d="m343.052 378.196 7.85-132.741a4.702 4.702 0 0 1 1.154-2.81 4.699 4.699 0 0 1 2.634-1.514l127.757-25.039a4.693 4.693 0 0 1 5.413 5.903l-23.89 82.846a4.692 4.692 0 0 0 5.398 5.904l36.616-7.054a4.696 4.696 0 0 1 4.639 1.771 4.687 4.687 0 0 1 .451 4.945L406.961 518.174l-1.886 2.913a4.5 4.5 0 0 1-3.864 2.147c-2.714 0-5.367-2.331-4.677-5.658l16.79-81.282a4.692 4.692 0 0 0-5.949-5.443l-21.973 6.67a4.696 4.696 0 0 1-5.828-3.033 4.693 4.693 0 0 1-.136-2.395l10.58-51.75a4.698 4.698 0 0 0-1.322-4.317 4.693 4.693 0 0 0-4.352-1.203l-35.573 8.218a4.688 4.688 0 0 1-4.079-.989 4.702 4.702 0 0 1-1.656-3.856h.016Zm229.632-121.532-91.663 16.683-8.341 28.934 31.847-6.134a12.269 12.269 0 0 1 12.88 5.658 12.271 12.271 0 0 1 .521 12.006L413.8 521.593l-.2.384-.23.352-1.87 2.914a12.286 12.286 0 0 1-10.304 5.673 12.66 12.66 0 0 1-9.722-4.631 12.27 12.27 0 0 1-2.453-10.273l15.778-76.375-17.173 5.213a12.417 12.417 0 0 1-13.187-4.017 12.292 12.292 0 0 1-2.53-10.274l9.66-47.226-31.081 7.176a12.392 12.392 0 0 1-11.776-3.573 12.42 12.42 0 0 1-3.327-9.2l5.965-100.74-114.08-20.393a9.381 9.381 0 0 0-11.04 8.786 9.392 9.392 0 0 0 1.226 5.106L393.56 579.262a9.385 9.385 0 0 0 16.345-.061l172.653-308.737a9.381 9.381 0 0 0-4.673-13.264 9.38 9.38 0 0 0-5.201-.536Z"/>
        </svg>
      )

    case "css-modules":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800">
          <path fill="currentColor" d="M155.804 383.514c11.13 0 19.767 2.932 25.911 8.796 6.144 5.865 9.555 12.527 10.233 19.987h-11.609c-1.317-5.665-3.95-10.153-7.899-13.464-3.91-3.311-9.415-4.967-16.517-4.967-8.657 0-15.658 3.052-21.004 9.156-5.306 6.064-7.959 15.379-7.959 27.946 0 10.293 2.393 18.65 7.181 25.073 4.827 6.384 12.008 9.575 21.543 9.575 8.777 0 15.459-3.371 20.047-10.113 2.434-3.551 4.249-8.218 5.446-14.003h11.609c-1.037 9.255-4.468 17.015-10.293 23.278-6.981 7.54-16.397 11.31-28.245 11.31-10.213 0-18.791-3.091-25.732-9.275-9.136-8.178-13.704-20.805-13.704-37.88 0-12.965 3.431-23.597 10.293-31.895 7.42-9.016 17.653-13.524 30.699-13.524Zm59.303 61.936c.279 4.986 1.456 9.036 3.531 12.147 3.949 5.825 10.911 8.737 20.884 8.737 4.469 0 8.538-.638 12.208-1.915 7.101-2.473 10.652-6.901 10.652-13.285 0-4.787-1.496-8.198-4.488-10.232-3.032-1.995-7.779-3.731-14.242-5.207l-11.909-2.693c-7.779-1.755-13.285-3.69-16.516-5.804-5.586-3.67-8.378-9.156-8.378-16.457 0-7.899 2.733-14.381 8.198-19.448 5.466-5.067 13.205-7.6 23.219-7.6 9.215 0 17.035 2.234 23.458 6.702 6.463 4.429 9.694 11.53 9.694 21.304h-11.19c-.599-4.708-1.875-8.318-3.83-10.831-3.63-4.588-9.794-6.882-18.491-6.882-7.022 0-12.068 1.476-15.14 4.428-3.072 2.952-4.608 6.383-4.608 10.293 0 4.308 1.795 7.46 5.386 9.455 2.353 1.276 7.679 2.872 15.977 4.787l12.328 2.813c5.944 1.356 10.532 3.211 13.764 5.565 5.585 4.109 8.377 10.073 8.377 17.893 0 9.734-3.55 16.695-10.651 20.884-7.062 4.189-15.28 6.284-24.655 6.284-10.931 0-19.489-2.793-25.673-8.378-6.183-5.546-9.215-13.066-9.095-22.56h11.19Zm81.744 0c.279 4.986 1.456 9.036 3.531 12.147 3.949 5.825 10.911 8.737 20.885 8.737 4.468 0 8.537-.638 12.207-1.915 7.102-2.473 10.652-6.901 10.652-13.285 0-4.787-1.496-8.198-4.488-10.232-3.032-1.995-7.779-3.731-14.242-5.207l-11.909-2.693c-7.779-1.755-13.285-3.69-16.516-5.804-5.585-3.67-8.378-9.156-8.378-16.457 0-7.899 2.733-14.381 8.198-19.448 5.466-5.067 13.205-7.6 23.219-7.6 9.216 0 17.035 2.234 23.458 6.702 6.463 4.429 9.694 11.53 9.694 21.304h-11.19c-.598-4.708-1.875-8.318-3.83-10.831-3.63-4.588-9.794-6.882-18.491-6.882-7.022 0-12.068 1.476-15.14 4.428-3.072 2.952-4.608 6.383-4.608 10.293 0 4.308 1.795 7.46 5.386 9.455 2.354 1.276 7.68 2.872 15.978 4.787l12.327 2.813c5.944 1.356 10.532 3.211 13.764 5.565 5.585 4.109 8.378 10.073 8.378 17.893 0 9.734-3.551 16.695-10.652 20.884-7.062 4.189-15.28 6.284-24.655 6.284-10.931 0-19.489-2.793-25.672-8.378-6.184-5.546-9.216-13.066-9.096-22.56h11.19Zm-178.389 90.004h17.055l25.253 74.323 25.074-74.323h16.876v87.907h-11.31v-51.882c0-1.796.039-4.768.119-8.917.08-4.149.12-8.597.12-13.344l-25.074 74.143h-11.789l-25.253-74.143v2.692c0 2.155.04 5.446.12 9.874.119 4.389.179 7.62.179 9.695v51.882h-11.37v-87.907Zm140.33-2.394c15.519 0 27.008 4.987 34.469 14.961 5.824 7.779 8.736 17.733 8.736 29.861 0 13.125-3.331 24.036-9.993 32.733-7.819 10.213-18.97 15.319-33.452 15.319-13.524 0-24.156-4.468-31.896-13.404-6.901-8.617-10.352-19.508-10.352-32.674 0-11.888 2.952-22.061 8.856-30.519 7.58-10.851 18.791-16.277 33.632-16.277Zm1.196 82.223c10.493 0 18.073-3.751 22.74-11.251 4.708-7.54 7.062-16.197 7.062-25.971 0-10.332-2.713-18.65-8.139-24.954-5.386-6.303-12.766-9.455-22.141-9.455-9.096 0-16.517 3.132-22.262 9.395-5.744 6.224-8.617 15.42-8.617 27.587 0 9.735 2.454 17.953 7.361 24.655 4.947 6.662 12.946 9.994 23.996 9.994Zm90.003-2.095c4.029 0 7.34-.419 9.934-1.257 4.627-1.555 8.417-4.548 11.369-8.976 2.354-3.55 4.05-8.098 5.087-13.644.598-3.311.898-6.383.898-9.215 0-10.891-2.175-19.349-6.523-25.373-4.309-6.024-11.27-9.036-20.885-9.036h-21.124v67.501h21.244Zm-33.213-77.734h35.606c12.089 0 21.464 4.289 28.126 12.866 5.944 7.739 8.917 17.653 8.917 29.741 0 9.335-1.756 17.773-5.266 25.313-6.184 13.325-16.816 19.987-31.896 19.987h-35.487v-87.907Zm100.954 0v54.336c0 6.383 1.197 11.689 3.59 15.918 3.551 6.383 9.535 9.575 17.953 9.575 10.093 0 16.955-3.451 20.586-10.353 1.954-3.75 2.932-8.797 2.932-15.14v-54.336h12.088v49.369c0 10.812-1.456 19.13-4.369 24.954-5.345 10.612-15.439 15.918-30.28 15.918-14.84 0-24.914-5.306-30.22-15.918-2.912-5.824-4.368-14.142-4.368-24.954v-49.369h12.088Zm75.64 0h11.909v77.435h44.522v10.472h-56.431v-87.907Zm69.357 0h64.091v10.771h-52.482v26.69h48.532v10.173h-48.532v29.801h53.379v10.472h-64.988v-87.907Zm88.387 59.542c.279 4.987 1.456 9.036 3.53 12.148 3.95 5.825 10.911 8.737 20.885 8.737 4.468 0 8.537-.638 12.208-1.915 7.101-2.473 10.652-6.902 10.652-13.285 0-4.787-1.496-8.198-4.488-10.233-3.032-1.994-7.78-3.73-14.243-5.206l-11.908-2.693c-7.78-1.755-13.285-3.69-16.517-5.804-5.585-3.671-8.378-9.156-8.378-16.457 0-7.899 2.733-14.382 8.199-19.448 5.465-5.067 13.205-7.6 23.218-7.6 9.216 0 17.035 2.234 23.458 6.702 6.463 4.428 9.695 11.53 9.695 21.304h-11.191c-.598-4.708-1.875-8.318-3.83-10.832-3.63-4.587-9.794-6.881-18.491-6.881-7.021 0-12.068 1.476-15.14 4.428-3.072 2.952-4.608 6.383-4.608 10.293 0 4.308 1.796 7.46 5.386 9.455 2.354 1.276 7.68 2.872 15.978 4.787l12.327 2.812c5.945 1.357 10.533 3.212 13.764 5.566 5.585 4.109 8.378 10.073 8.378 17.892 0 9.735-3.551 16.696-10.652 20.885-7.061 4.189-15.28 6.283-24.655 6.283-10.931 0-19.488-2.792-25.672-8.377-6.184-5.546-9.216-13.066-9.096-22.561h11.191Z"/>
          <path fill="currentColor" fill-rule="evenodd" d="M591.627 150.647H92.647v499.706h498.98V150.647ZM89 147v507h506.274V147H89Z" clip-rule="evenodd"/>
        </svg>
      )

    case "intersection-observer":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800">
          <path fill="currentColor" d="M108.726 292 49.307 482.917H25L84.21 292h24.516Zm21.606 0v190.917h-21.606V292h21.606Zm105.333 0v190.917h-21.607V292h21.607Zm-21.607 0-59.21 190.917H130.54L189.751 292h24.307Zm421.745 197.758H775V508H635.803v-18.242ZM437.812 442.91h-35.527v-11.401h7.895v-32.753c0-7.67-1.454-13.059-4.363-16.376-2.908-3.317-6.856-4.768-11.842-4.768-6.648 0-11.634 2.281-14.958 7.048-3.324 4.768-4.987 9.536-5.194 14.304v32.337h12.465v11.401h-35.526v-11.401h7.895v-32.545c0-7.877-1.455-13.267-4.363-16.376-2.909-3.109-6.856-4.768-11.635-4.768-6.648 0-11.426 2.281-14.958 6.841-3.324 4.56-4.986 9.328-5.194 14.303v32.753h14.335v11.401h-41.967v-11.401h12.466v-52.446h-12.673v-11.608h27.839v13.267c2.493-4.353 5.609-7.877 9.764-10.78 4.156-2.694 9.142-4.145 15.167-4.145 5.817 0 11.011 1.451 15.581 4.353 4.571 2.902 7.687 7.255 9.349 13.267 2.286-5.183 5.61-9.329 10.18-12.645 4.571-3.317 9.973-4.975 16.413-4.975 7.272 0 13.504 2.28 18.491 6.84 4.986 4.561 7.687 11.609 7.687 21.144v37.728h12.673v11.401Zm88.296 0h-27.424v-14.925c-2.493 4.56-5.817 8.499-10.18 11.608-4.363 3.317-9.972 4.975-17.244 4.975-9.972 0-18.074-3.317-24.099-10.157-6.025-6.634-8.934-15.962-8.934-27.57 0-10.365 2.701-19.9 8.31-28.4 5.402-8.499 14.336-12.852 26.593-12.852 11.842 0 20.36 4.561 25.554 13.474v-40.837h-17.867v-11.608h32.826v104.891h12.465v11.401Zm-27.632-34.826v-9.12c-.207-6.219-2.493-11.402-6.648-15.133-4.155-3.731-9.141-5.804-14.958-5.804-7.479 0-13.089 2.695-17.036 8.084-3.948 5.39-5.817 12.023-5.817 19.901 0 8.499 2.077 15.132 6.232 19.692 4.155 4.561 9.349 6.841 15.374 6.841 6.648 0 12.05-2.695 16.205-7.877 4.363-5.39 6.441-10.987 6.648-16.584Zm81.441 34.826v-11.401h12.465v-32.753c0-7.67-1.454-13.059-4.57-16.376-2.909-3.317-7.064-4.768-11.842-4.768-6.441 0-11.635 2.073-15.374 6.219-3.74 4.146-5.818 9.121-6.025 14.511v32.959h12.465v11.401h-40.097v-11.401h12.465v-52.238h-12.88v-11.608h28.254v12.852c5.402-9.535 14.128-14.303 26.385-14.303 7.48 0 13.92 2.28 19.114 6.841 5.194 4.56 7.687 11.608 7.687 21.143v37.728h12.465v11.194h-40.512Z"/>
        </svg>
      )

    case "lenis":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800">
          <path fill="currentColor" d="m514.03 459.132-.42-.419-1.582 1.585c-6.232 6.222-17.001 2.65-18.103-6.081a42.938 42.938 0 0 1-.325-5.412V301.207h-.563v14.705a1.77 1.77 0 0 1-1.27 1.699 1.775 1.775 0 0 1-1.994-.729 23.66 23.66 0 0 0-19.868-10.777h-44.789l-34.439 34.39a2.97 2.97 0 0 1-4.555-.452 2.963 2.963 0 0 1-.498-1.642v-37.194h-.593v16.982a1.77 1.77 0 0 1-1.392 1.735 1.775 1.775 0 0 1-1.996-.984c-4.739-10.156-11.995-12.823-11.995-12.823l-33.979 33.532.421.42 1.499-1.479c6.232-6.14 16.864-2.585 18.049 6.081.253 1.916.376 3.846.368 5.779v109.936l-37.219 37.165.421.414 1.871-1.864a10.476 10.476 0 0 1 7.506-2.957h73.133l28.599-28.942 4.805-4.798-.415-.42-1.854 1.852a10.676 10.676 0 0 1-7.541 3.123h-29.251a2.966 2.966 0 0 1-2.736-1.828 2.941 2.941 0 0 1-.167-1.709 2.946 2.946 0 0 1 .812-1.514l64.989-64.894a2.96 2.96 0 0 1 3.223-.638 2.957 2.957 0 0 1 1.829 2.726v63.805c0 27.363 15.994 33.207 15.994 33.207l34.025-33.982ZM396.985 335.011h31.117a2.965 2.965 0 0 1 2.741 1.826c.225.541.284 1.136.169 1.71a2.961 2.961 0 0 1-.813 1.516l-39.522 39.488a2.962 2.962 0 0 1-3.231.644 2.954 2.954 0 0 1-1.828-2.737V346.38l11.367-11.369Zm-11.391 50.426 6.344-6.323v45.392l-6.356 6.347.012-45.416Zm-27.296 73.494 28.599-28.557a2.962 2.962 0 0 1 5.053 2.093v26.394a2.959 2.959 0 0 1-.871 2.088l-3.033 3.034h-27.663a2.96 2.96 0 0 1-2.898-3.539c.116-.573.398-1.1.813-1.513Zm63.265-35.549v-73.843l14.548-14.528h17.249c2.828 0 5.54 1.122 7.54 3.119s3.123 4.705 3.123 7.529v42.517l-37.372 37.317a2.96 2.96 0 0 1-3.264.674 2.957 2.957 0 0 1-1.824-2.785Zm-237.687-49.189L94.08 463.858H76.054a2.958 2.958 0 0 1-2.904-3.537 2.95 2.95 0 0 1 .813-1.514l25.377-25.358a10.637 10.637 0 0 0 3.115-7.524v-75.12a2.943 2.943 0 0 1 .871-2.094l13.714-13.694a10.67 10.67 0 0 1 7.489 3.146 10.638 10.638 0 0 1 3.096 7.501v21.383a7.082 7.082 0 0 1-2.08 5.022l-1.948 1.946.362.474 33.272-33.208v-40.05h-.592v14.699a1.776 1.776 0 0 1-3.258.97 23.693 23.693 0 0 0-19.868-10.772h-27.841l-24.346 24.4-9.478 9.464a2.962 2.962 0 0 1-5.053-2.094v-36.673h-.592v16.964a1.776 1.776 0 0 1-3.389.751c-4.739-10.156-11.995-12.823-11.995-12.823l-33.972 33.532.415.42 1.498-1.479c6.244-6.146 16.87-2.573 18.05 6.104.253 1.908.376 3.831.367 5.756v109.759L0 497.332l.42.42 1.458-1.456a10.672 10.672 0 0 1 7.523-3.129h107.485l58.572-58.842a10.64 10.64 0 0 0 3.122-7.524v-42.157a10.642 10.642 0 0 1 3.122-7.524l2.517-2.513-.343-.414ZM66.86 376.825v-31.001l10.828-10.813h31.355a2.968 2.968 0 0 1 2.741 1.826 2.953 2.953 0 0 1-.645 3.226l-39.232 39.175a2.964 2.964 0 0 1-4.561-.448 2.953 2.953 0 0 1-.497-1.646l.011-.319Zm0 8.281 5.995-5.992v45.51l-6.006 5.998.011-45.516Zm1.185 78.735H41.572a2.965 2.965 0 0 1-2.741-1.825 2.953 2.953 0 0 1 .644-3.227l28.321-28.273a2.962 2.962 0 0 1 5.059 2.088v26.398l-4.81 4.839Zm80.988-4.643c0 .47-.188.921-.521 1.254l-2.867 2.868c-.333.333-.785.52-1.256.521h-42.342a2.963 2.963 0 0 1-2.91-3.536 2.956 2.956 0 0 1 .813-1.516l44.03-43.96a2.966 2.966 0 0 1 4.554.452c.326.486.499 1.057.499 1.641v42.276Zm629.822-82.775-41.121-6.134a2.944 2.944 0 0 1-1.47-.665 2.939 2.939 0 0 1-.971-2.945c.123-.532.4-1.019.788-1.406L800 301.42l-.418-.42-1.999 1.999a10.641 10.641 0 0 1-3.459 2.308c-1.294.535-2.682.81-4.082.81h-78.724l-63.219 63.124v4.555c0 4.759 1.712 9.359 4.824 12.966a19.916 19.916 0 0 0 12.122 6.684c.465.071.894.267 1.253.568a2.533 2.533 0 0 1 .824 2.506 2.563 2.563 0 0 1-.671 1.197l-31.274 31.231.417.42 1.853-1.852a7.123 7.123 0 0 1 6.088-1.999l50.29 7.565a2.963 2.963 0 0 1 1.465.667c.418.354.729.816.906 1.336.17.519.188 1.076.065 1.608-.13.532-.4 1.019-.789 1.405l-59.783 59.482.423.42 1.729-1.727c2-1.986 4.706-3.1 7.523-3.1h86.717c.153 0 .3-.062.412-.171l66.913-66.213v-26.535c0-5.772-2.07-11.352-5.847-15.726a24.124 24.124 0 0 0-14.704-8.105Zm-47.662-7.098-25.033-3.739a2.94 2.94 0 0 1-1.471-.663 2.917 2.917 0 0 1-.905-1.335 2.94 2.94 0 0 1 .717-3.017l25.698-25.666 28.369-.071a2.959 2.959 0 0 1 2.741 1.821c.229.54.288 1.135.17 1.709a2.944 2.944 0 0 1-.806 1.515l-29.48 29.446Zm-46.32-6.915a6.693 6.693 0 0 1-4.076-2.241 6.689 6.689 0 0 1-1.623-4.354v-16.977l3.864-3.809 39.15-.1a2.963 2.963 0 0 1 2.741 1.821 2.98 2.98 0 0 1 .171 1.708 2.92 2.92 0 0 1-.812 1.516l-24.669 24.636-14.746-2.2Zm-18.887 36.626 4.735-4.732 53.126 7.973a3.394 3.394 0 0 1 2.711 2.287c.194.594.218 1.231.071 1.839a3.303 3.303 0 0 1-.9 1.605l-59.743-8.972Zm34.357 35.04 25.862 3.892a2.956 2.956 0 0 1 1.465.668c.424.354.735.818.9 1.339.171.52.194 1.078.065 1.61-.13.533-.4 1.019-.788 1.405l-21.128 20.922h-29.192a2.962 2.962 0 0 1-2.906-3.543c.118-.575.4-1.102.818-1.515l24.904-24.778Zm12.305 24.778 41.973-41.724a2.97 2.97 0 0 0 .788-1.405 2.962 2.962 0 0 0-2.435-3.611l-26.521-4.016 4.54-4.52a.64.64 0 0 1 .236-.143.585.585 0 0 1 .276-.022l26.804 4.022a8.801 8.801 0 0 1 5.352 2.951 8.763 8.763 0 0 1 2.124 5.721v42.741l-5.094 5.04h-45.932a2.982 2.982 0 0 1-1.641-.503 2.974 2.974 0 0 1-1.253-3.031 2.955 2.955 0 0 1 .812-1.512l-.029.012Z"/>
          <path fill="currentColor" d="m654.905 459.132-.418-.419-2.135 2.129a10.667 10.667 0 0 1-7.535 3.117h-55.99a2.957 2.957 0 0 1-2.095-5.046l35.828-35.774-.418-.42-4.217 4.212a1.776 1.776 0 0 1-2.735-.269 1.78 1.78 0 0 1-.3-.985v-87.069l3.77-3.768h20.999v-.036l33.28-33.23-.424-.42-1.841 1.845a10.626 10.626 0 0 1-3.458 2.308c-1.294.535-2.682.81-4.082.81H545.497l-33.587 33.55.421.42 2.037-2.006a10.672 10.672 0 0 1 7.47-3.07l52.892-.088a2.962 2.962 0 0 1 2.74 1.821 2.95 2.95 0 0 1-.637 3.224l-35.34 35.289.42.42 4.182-4.181a1.773 1.773 0 0 1 1.939-.383 1.77 1.77 0 0 1 1.094 1.642v86.868l-4.348 4.336h-18.09l-34.032 33.621.42.42 1.777-1.774a10.669 10.669 0 0 1 7.476-3.076h118.788l33.786-34.018Zm-72.166-124.215 27.893-.048a2.972 2.972 0 0 1 1.646.499c.489.324.865.786 1.089 1.325a2.952 2.952 0 0 1-.636 3.222l-28.932 28.895a2.969 2.969 0 0 1-3.231.643 2.957 2.957 0 0 1-1.828-2.737v-27.801l3.999-3.998Zm-3.999 39.772 6.516-6.506v55.376l-6.516 6.507v-55.377Zm1.481 54.762a2.963 2.963 0 0 1 5.059 2.088v27.996l-4.443 4.436h-28.048a2.967 2.967 0 0 1-2.735-1.824 2.955 2.955 0 0 1 .638-3.222l29.529-29.474Zm-248.739 29.41-.421-.421-2.334 2.336a10.682 10.682 0 0 1-7.541 3.118h-62.489a2.956 2.956 0 0 1-2.091-5.046l79.62-79.509-.415-.42-2.807 2.797a10.669 10.669 0 0 1-15.153-.077l-19.329-19.679a2.953 2.953 0 0 1 0-4.14l56.275-56.193-.421-.42-1.854 1.858a10.675 10.675 0 0 1-7.547 3.117h-81.438l-33.895 33.845a2.963 2.963 0 0 1-5.059-2.088v-36.673h-.592v16.923a1.77 1.77 0 0 1-.394 1.104 1.785 1.785 0 0 1-.997.619 1.784 1.784 0 0 1-1.992-.972c-4.739-10.156-12.001-12.823-12.001-12.823l-33.972 33.532.414.42 1.505-1.479c6.232-6.14 16.859-2.585 18.043 6.081.256 1.915.381 3.846.374 5.779v109.877l-37.183 37.129.421.414 1.747-1.745a10.667 10.667 0 0 1 7.523-3.117h129.675l34.328-34.147Zm-37.61-38.064-43.16 43.097h-17.089a2.968 2.968 0 0 1-2.731-1.827 2.956 2.956 0 0 1 .64-3.219l25.697-25.659a10.646 10.646 0 0 0 3.121-7.542V395.93l6.516-6.506 27.018 27.209a2.96 2.96 0 0 1 .853 2.084 2.957 2.957 0 0 1-.865 2.08Zm-33.533-32.81v-39.229l13.831-13.812 39.386-.1a2.968 2.968 0 0 1 2.747 1.822 2.958 2.958 0 0 1-.644 3.229l-50.25 50.178a2.964 2.964 0 0 1-5.07-2.088Zm-24.88-52.94 30.684-.077a2.969 2.969 0 0 1 2.74 1.821 2.959 2.959 0 0 1-.636 3.225l-38.576 38.246a2.966 2.966 0 0 1-4.546-.456 2.95 2.95 0 0 1-.5-1.638v-29.084a2.95 2.95 0 0 1 .87-2.088l9.964-9.949Zm-10.834 49.343 6.101-6.068v46.361l-6.113 6.111.012-46.404Zm6.119 48.267v26.185l-5.089 5.081h-26.23a2.961 2.961 0 0 1-2.904-3.531c.113-.573.394-1.1.807-1.514l28.351-28.309a2.972 2.972 0 0 1 3.215-.651 2.967 2.967 0 0 1 1.844 2.709l.006.03Z"/>
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