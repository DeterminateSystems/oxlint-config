{
  inputs = {
    nixpkgs.url = "https://flakehub.com/f/DeterminateSystems/nixpkgs-weekly/*";
  };

  outputs =
    inputs:
    let
      inherit (inputs.nixpkgs) lib;

      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];

      forEachSystem =
        f:
        lib.genAttrs systems (
          system:
          let
            pkgs = import inputs.nixpkgs {
              inherit system;
            };
          in
          f pkgs
        );
    in
    {
      devShells = forEachSystem (pkgs: {
        default = pkgs.mkShellNoCC {
          packages = [
            pkgs.nodejs_latest

            pkgs.nixfmt
          ];
        };
      });
    };
}
