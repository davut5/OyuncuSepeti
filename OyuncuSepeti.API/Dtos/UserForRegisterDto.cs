using System.ComponentModel.DataAnnotations;

namespace OyuncuSepeti.API.Dtos
{
    public class UserForRegisterDto
    {
        
        [Required(ErrorMessage="Kullanıcı Adı Boş Geçilemez")]
        
        public string Username { get; set; }

        [Required(ErrorMessage="Şifre Alanı Boş Geçilemez")]
        [StringLength(8,MinimumLength=4,ErrorMessage="4 ile 8 karakter arası şifre giriniz")]
        public string Password { get; set; }
    }
}