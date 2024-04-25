const linear = `linear(
  0, 0.002, 0.01 3.6%, 0.034, 0.074 9.1%, 0.128 11.4%, 0.194 13.4%, 0.271 15%,
  0.344 16.1%, 0.544, 0.66 20.6%, 0.717 22.4%, 0.765 24.6%, 0.808 27.3%,
  0.845 30.4%, 0.883 35.1%, 0.916 40.6%, 0.942 47.2%, 0.963 55%, 0.979 64%,
  0.991 74.4%, 0.998 86.4%, 1
)`

class Flip {
  selector
  defaults

  constructor(selector, defaults = {}) {
    this.selector = selector
    this.defaults = defaults
  }

  rect(el) {
    const rect = el.getBoundingClientRect().toJSON()
    return { el, ...rect }
  }

  measure() {
    return Array.from(document.querySelectorAll(this.selector)).map(this.rect)
  }

  absolute(el, to) {
    let style = el.getAttribute('style')
    el.setAttribute(
      'style',
      `${style} position: absolute; top: ${to.top}px; left: ${to.left}px; width: ${to.width}px;	height: ${to.height}px;`
    )

    return () => el.setAttribute('style', style)
  }

  invert(el, from, to, options) {
    // @ts-ignore
    const { promise, resolve } = Promise.withResolvers()

    const dx = from.left - to.left
    const dy = from.top - to.top

    const removeStyle = this.absolute(el, to)
    const flip = el.animate(
      [
        {
          width: `${from.width}px`,
          height: `${from.height}px`,
          transform: `translate(${dx}px, ${dy}px)`,
        },
        {
          width: `${to.width}px`,
          height: `${to.height}px`,
          transform: `translate(0px, 0px)`,
        },
      ],
      { ...options, fill: 'backwards' }
    )

    flip.onfinish = () => {
      removeStyle()
      resolve()
    }

    return promise
  }

  flip(options = {}) {
    const {
      duration = 500,
      delay = 0,
      stagger = 0,
      easing = linear,
    } = { ...this.defaults, ...options }

    // @ts-ignore
    const { promise, resolve } = Promise.withResolvers()
    const promises = []

    const from = this.measure()

    requestAnimationFrame(() => {
      const to = this.measure()

      for (let i = 0; i < from.length; i++) {
        const promise = this.invert(to[i].el, from[i], to[i], {
          duration,
          delay: i * stagger + delay,
          easing,
        })
        promises.push(promise)
      }

      Promise.all(promises).then(resolve)
    })

    return promise
  }
}

export function createFlip(selector, defaults = {}) {
  return new Flip(selector, defaults)
}
