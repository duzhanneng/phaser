/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Attempts to determine the document inner height across iOS and standard devices.
 * Based on code by @tylerjpeterson
 *
 * @function Phaser.DOM.GetInnerHeight
 * @since 3.16.0
 *
 * @param {boolean} iOS - Is this running on iOS?
 *
 * @return {number} The inner height value.
 */
var GetInnerHeight = function (iOS)
{
    return window.innerHeight;
};

module.exports = GetInnerHeight;
