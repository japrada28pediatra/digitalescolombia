<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u553593952_EX6An' );

/** Database username */
define( 'DB_USER', 'u553593952_doLSm' );

/** Database password */
define( 'DB_PASSWORD', 'Sq9xxN94zc' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '[vqW*ZitwKO_+VC|]IF=+@%aK{u~7D-<b@[vCls/~Sia$&lj0!Nse$<%hn/}Svd-' );
define( 'SECURE_AUTH_KEY',   'u9Sdisz*%2@b;RybXCtSA$2b6<xI[W$yf:8!+kI=d--Fc`W&wmgj!_:c3(|oO8_?' );
define( 'LOGGED_IN_KEY',     'w~Zp$f%Z99g%lJ3|=bdG>JGR<%S;qS{_BAt44RC>yu83c S%)v[*8=FW<]Eb+zM2' );
define( 'NONCE_KEY',         ',/z^0jUo.y8 `STAU.:5+g0R!x&I:b/qL/4dn?Mwrs,9ZH:Ld~x7i!]}5yq>Aw4)' );
define( 'AUTH_SALT',         ' 5s@/@|}COw`|G/8o4]dS~FgSHq,YdE@l<a#7(YDaIR)p3xCkx#f,dX:4tgK|lWI' );
define( 'SECURE_AUTH_SALT',  'B`2&tgggGo25JsoXK[mx.$kX@l&kd-YeY6p0nDV ~BkU][5k/W5lGtVr*Z-e-d69' );
define( 'LOGGED_IN_SALT',    '9Ugdlz:XKrqH22$vc6C%t+ A0jXJt}_rXG#2UAV<ceKw0+kI$QMhXy-) `+!:M<3' );
define( 'NONCE_SALT',        '[T1$Frgqobyu#1+Qi55a.Ax!(Z]z/qXd;d <$v q[}lM~+-SSnZa`^4 ,=C<VhsI' );
define( 'WP_CACHE_KEY_SALT', '*P]TrRq)0{pM#_6EeE-sG4x%x89<OFvEw,Ci>%t^UkD-+zoK`aZd}=wQ;A0VC!N3' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '518929f85a7ded2bd845b62093e77eb9' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
