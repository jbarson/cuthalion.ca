// Thanks to http://speckyboy.com/2012/03/07/scroll-to-internal-link-with-jquery/
/**
 *
 * @param {*} element the jQuery element you are scrolling to
 * @param {number} navheight Offset in pixels to center the element
 */
import $ from 'jquery'

function scrollToDiv (element, navheight) {
  const offset = element.offset()
  const offsetTop = offset.top
  const totalScroll = offsetTop - navheight
  $('body').animate({ scrollTop: totalScroll }, 500)
}
$('.slownav').click(function () {
  const el = $(this).attr('href')
  const elWrapped = $(el)
  scrollToDiv(elWrapped, 40)
  return false
})
