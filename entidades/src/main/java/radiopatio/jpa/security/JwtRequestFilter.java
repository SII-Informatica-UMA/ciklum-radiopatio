package radiopatio.jpa.security;

//import es.uma.informatica.sii.fitness.ejercicios.security.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtRequestFilter
        extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtTokenUtil;

    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String requestTokenHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = this.jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                System.out.println("No puedo obtener el JWT");
            } catch (ExpiredJwtException e) {
                System.out.println("El token ha expirado");
            }
            this.logger.debug("usuario = " + username);
        } else {
            this.logger.debug("El token no comienza con Bearer");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            User user = new User(username, "", Collections.EMPTY_LIST);

            if (!this.jwtTokenUtil.isTokenExpired(jwtToken).booleanValue()) {

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        user, user.getPassword(), user.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails((new WebAuthenticationDetailsSource()).buildDetails(request));

                this.logger.debug(
                        "usernamePasswordAuthenticationToken = " + String.valueOf(usernamePasswordAuthenticationToken));
                SecurityContextHolder.getContext()
                        .setAuthentication((Authentication) usernamePasswordAuthenticationToken);
            } else {
                this.logger.debug("Token no válido");
            }
        }

        chain.doFilter((ServletRequest) request, (ServletResponse) response);
    }
}
